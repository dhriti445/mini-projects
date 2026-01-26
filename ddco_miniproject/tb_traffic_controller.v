
    localparam CLK_PERIOD = 10; 

    reg clk;
    reg rst;
    wire ns_red, ns_yellow, ns_green;
    wire ew_red, ew_yellow, ew_green;

    traffic_controller #(
        .GREEN_CYCLES(20),
        .YELLOW_CYCLES(5)
    ) DUT (
        .clk(clk),
        .rst(rst),
        .ns_red(ns_red),
        .ns_yellow(ns_yellow),
        .ns_green(ns_green),
        .ew_red(ew_red),
        .ew_yellow(ew_yellow),
        .ew_green(ew_green)
    );

    initial begin
        clk = 1'b0;
        forever #(CLK_PERIOD/2) clk = ~clk;
    end

    initial begin
        $dumpfile("traffic_tb.vcd");
        $dumpvars(0, tb_traffic_controller);

        rst = 1'b1;
        #(CLK_PERIOD*5);
        rst = 1'b0;

        #(CLK_PERIOD * 5000); 

        $display("Simulation finished");
        $finish;
    end

    initial begin
        $display("Time(ns)  ns_G ns_Y ns_R  ew_G ew_Y ew_R");
        forever begin
            @(posedge clk);
            $display("%8t  %b     %b    %b     %b    %b    %b", $time,
                ns_green, ns_yellow, ns_red,
                ew_green, ew_yellow, ew_red);
        end
    end

endmodule
