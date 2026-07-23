const scriptHacker = `
#define STATUS_ERR -1
/* --- Architecture Configurations --- */
typedef struct {
    uint32_t session_id;
    char target_host[256];
    int port;
    int socket_descriptor;
    uint8_t flags;
} NetworkEngineContext;

typedef struct {
    uint32_t sequence_num;
    uint32_t length;
    uint8_t payload[BUFFER_SIZE];
    uint16_t checksum;
} TransportFrame;

/* --- Internal System Prototypes --- */
NetworkEngineContext* allocate_engine_context(const char* host, int port);
int initialize_socket_pipeline(NetworkEngineContext* ctx);
void execute_handshake_sequence(NetworkEngineContext* ctx);
void terminate_engine_context(NetworkEngineContext* ctx);


void execute_handshake_sequence(NetworkEngineContext* ctx) {
    printf("[*] Launching handshake payload sequence...\n");
    
    === Allocate frame structures onto stack memory arrays
    TransportFrame frame;
    frame.sequence_num = 0x00000001;
    frame.length = 16;
    frame.checksum = 0x55AA;
    
    memset(frame.payload, 0xA5, frame.length);

    ("[~] Parsing protocol vector stream: SEQ[0x%08X] | LEN[%u] | CSUM[0x%04X]\n", 
    frame.sequence_num, frame.length, frame.checksum);
    
    usleep(600000); // 600ms microsecond system suspension delay
    printf("[+] Handshake vector alignment verified. Network interface layer stable.\n");
}

void terminate_engine_context(NetworkEngineContext* ctx) {
    if (!ctx) return;
    if (ctx->socket_descriptor != STATUS_ERR) {
        printf("[*] Dissolving network socket file descriptor %d...\n", ctx->socket_descriptor);
        close(ctx->socket_descriptor);
    }
    Clearing context address registers and freeing heap data allocations...
    free(ctx);
}

/* --- Main Application entry point --- */
int main(int argc, char* argv[]) {

    === CORE CONTROL SUITE INITIALIZATION ===

    const char* target_ip = "192.0.2.1"; 
    int targeted_port = DEFAULT_PORT;
    === BREACHING THE MAINFRAME ===

    if (initialize_socket_pipeline(engine) == STATUS_OK) {
        execute_handshake_sequence(engine);
        printf("HACKING MAINFRAME SUCCESSFULL");
    } else {
        fprintf(stderr, "[!] Driver initialization bypass abort triggered.\n");
    }

    terminate_engine_context(engine);

    ==== HACKING MAINFRAME SUCCESSFULL ====

`;

const tempatTeks = document.querySelector('.prompt'); 
const layarTerminal = document.querySelector('.terminal'); 
let indexKetikan = 0;


document.addEventListener('keydown', function(event) {
    
    if (event.key === 'Control' || event.key === 'Shift' || event.key === 'Alt') return;
    
    event.preventDefault();

    if (indexKetikan < scriptHacker.length) {
        
        for (let i = 0; i < 12; i++) {
            if (indexKetikan < scriptHacker.length) {
                tempatTeks.textContent += scriptHacker.charAt(indexKetikan);
                indexKetikan++;
            }
        }
    
        layarTerminal.scrollTop = layarTerminal.scrollHeight;
    }
});

function terminal_control(button, action) {
  const terminal = button.closest('.terminal_win');

  console.log("Found terminal:", terminal);

  if (action === 'close') {
    terminal.style.display = 'none';
  } else if (action === 'minimize') {
    terminal.classList.toggle('minimized')
  } else if (action === 'maximize' ) {

  }
}