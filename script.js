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
`;

const tempatTeks = document.querySelector('.prompt'); 
const layarTerminal = document.querySelector('.terminal'); 
let indexKetikan = 0;


document.addEventListener('keydown', function(event) {
    
    if (event.key === 'Control' || event.key === 'Shift' || event.key === 'Alt') return;
    
    event.preventDefault();

    if (indexKetikan < scriptHacker.length) {
        
        for (let i = 0; i < 9; i++) {
            if (indexKetikan < scriptHacker.length) {
                tempatTeks.textContent += scriptHacker.charAt(indexKetikan);
                indexKetikan++;
            }
        }
        
        
        layarTerminal.scrollTop = layarTerminal.scrollHeight;
    }
});