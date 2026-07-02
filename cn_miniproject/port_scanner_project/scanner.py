import socket

def scan_port(target, port):

    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.settimeout(1)

        result = s.connect_ex((target, port))

        if result == 0:

            banner = ""
            try:
                s.send(b"GET / HTTP/1.0\r\n\r\n")
                banner = s.recv(1024).decode(errors="ignore")
                banner = banner.split("\n")[0]
            except:
                banner = "No banner"

            s.close()
            return (port, "OPEN", banner)

        s.close()
        return (port, "CLOSED", "")

    except:
        return (port, "ERROR", "")