// traffic_controller.v
// 2-way traffic light controller (NS vs EW)
// Author: ChatGPT (example for DDCO mini project)
// - Parameterizable GREEN and YELLOW durations in clock cycles
// - Synchronous reset active-high (rst)
// - Outputs: each direction has red/yellow/green (1 = ON)

module traffic_controller #(
    parameter integer GREEN_CYCLES = 200,   
    parameter integer YELLOW_CYCLES = 50    
)(
    input  wire clk,
    input  wire rst,          
    output reg  ns_red,
    output reg  ns_yellow,
    output reg  ns_green,
    output reg  ew_red,
    output reg  ew_yellow,
    output reg  ew_green
);

    localparam [1:0]
        S_NS_GREEN  = 2'b00,
        S_NS_YELLOW = 2'b01,
        S_EW_GREEN  = 2'b10,
        S_EW_YELLOW = 2'b11;

    reg [1:0] state, next_state;

    localparam CNT_WIDTH = $clog2((GREEN_CYCLES > YELLOW_CYCLES ? GREEN_CYCLES : YELLOW_CYCLES) + 1);
    reg [CNT_WIDTH-1:0] counter;

    always @(*) begin
        next_state = state;
        case (state)
            S_NS_GREEN: begin
                if (counter >= (GREEN_CYCLES - 1))
                    next_state = S_NS_YELLOW;
            end
            S_NS_YELLOW: begin
                if (counter >= (YELLOW_CYCLES - 1))
                    next_state = S_EW_GREEN;
            end
            S_EW_GREEN: begin
                if (counter >= (GREEN_CYCLES - 1))
                    next_state = S_EW_YELLOW;
            end
            S_EW_YELLOW: begin
                if (counter >= (YELLOW_CYCLES - 1))
                    next_state = S_NS_GREEN;
            end
            default: next_state = S_NS_GREEN;
        endcase
    end

    always @(posedge clk) begin
        if (rst) begin
            state   <= S_NS_GREEN;
            counter <= 0;
        end else begin
            if (next_state != state) begin
                state   <= next_state;
                counter <= 0;
            end else begin
                counter <= counter + 1'b1;
            end
        end
    end

    always @(*) begin
        // default all off
        ns_red    = 1'b0;
        ns_yellow = 1'b0;
        ns_green  = 1'b0;
        ew_red    = 1'b0;
        ew_yellow = 1'b0;
        ew_green  = 1'b0;

        case (state)
            S_NS_GREEN: begin
                ns_green = 1'b1;
                ew_red   = 1'b1;
            end
            S_NS_YELLOW: begin
                ns_yellow = 1'b1;
                ew_red    = 1'b1;
            end
            S_EW_GREEN: begin
                ew_green = 1'b1;
                ns_red   = 1'b1;
            end
            S_EW_YELLOW: begin
                ew_yellow = 1'b1;
                ns_red    = 1'b1;
            end
            default: begin
                ns_red = 1'b1;
                ew_red = 1'b1;
            end
        endcase
    end

endmodule
