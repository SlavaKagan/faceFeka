<?php

namespace game;
use Exception;
use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;
use SplObjectStorage;

class Game implements MessageComponentInterface
{
    protected $clients;
    protected $type;
    protected $winner;
    protected $pid;

    public function __construct()
    {
        $this->clients = new SplObjectStorage;
        $this->winner = false;
    }

    /**
     * When a new connection is opened it will be passed to this method
     * @param ConnectionInterface $conn The socket/connection that just connected to your application
     * @throws Exception
     */

    public function onOpen(ConnectionInterface $conn)
    {
        $this->clients->attach($conn);
        $this->clients[$conn->resourceId] = $conn;
        echo "New connection! ({$conn->resourceId})\n";
    }

    /**
     * This is called before or after a socket is closed (depends on how it's closed).  SendMessage to $conn will not result in an error if it has already been closed.
     * @param ConnectionInterface $conn The socket/connection that is closing/closed
     * @throws Exception
     */

    public function onClose(ConnectionInterface $conn)
    {
        $this->clients->detach($conn);
        unset($this->clients[$conn->resourceId]);
        echo "Connection {$conn->resourceId} has disconnected\n";
    }

    /**
     * If there is an error with one of the sockets, or somewhere in the application where an Exception is thrown,
     * the Exception is sent back down the stack, handled by the Server and bubbled back up the application through this method
     * @param ConnectionInterface $conn
     * @param Exception $e
     * @throws Exception
     */

    public function onError(ConnectionInterface $conn, Exception $e)
    {
        echo "An error has occurred: {$e->getMessage()}\n";
        $conn->close();
    }


    /**
     * Triggered when a client sends data through the socket
     * @param ConnectionInterface $from The socket/connection that sent the message to your application
     * @param string $msg The message received
     * @throws Exception
     */

    public function onMessage(ConnectionInterface $from, $msg)
    {
        if(sizeof($this->clients)== 3) {
            $numRecv = count($this->clients) - 1;
            echo sprintf('Connection %d sending message "%s" to %d other connection%s' . "\n"
                , $from->resourceId, $msg, $numRecv, $numRecv == 1 ? '' : 's');

            foreach ($this->clients as $client) {
                if ($from !== $client) {
                    // The sender is not the receiver, send to each client connected
                    $client->send($msg);
                }
            }

            $arr = json_decode($msg, true);
            $type = $arr['type'];

            if ($type == 'ILostYouWon') {
                unset($this->clients[1]);
                unset($this->clients[2]);
            }
        }
    }
}