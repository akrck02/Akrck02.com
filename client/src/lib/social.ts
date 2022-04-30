import { createSVG, MaterialIconsProperties } from "./gtd-ts/material/materialicons.js";
import { UIComponent } from "./gtd-ts/web/uicomponent.js";

const SOCIAL_ICONS = {
    twitter: `<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>`,
    github: `<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>`,
    youtube: `<path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>`,
    twitch: `<path d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z" fill-rule="evenodd" clip-rule="evenodd"/>`,
    valhalla: `<path d="M6.82319 18.6453C6.80167 18.5892 7.51098 18.0325 8.06779 17.6684C8.16714 17.6034 8.36498 17.4706 8.50744 17.3731C8.6499 17.2757 8.78766 17.196 8.81357 17.196C8.83948 17.196 8.86777 17.18 8.87643 17.1605C8.89559 17.1174 9.18364 16.9125 9.22507 16.9125C9.24136 16.9125 9.40846 16.8062 9.5964 16.6763C9.94355 16.4363 10.0689 16.393 10.1092 16.4991C10.1325 16.5604 10.0184 17.012 9.85555 17.5031C9.80386 17.659 9.7112 17.9538 9.64965 18.1582C9.52181 18.5828 9.5251 18.5786 9.26465 18.6526C8.97365 18.7352 6.85526 18.7289 6.82319 18.6453V18.6453ZM18.5536 18.6493C18.5146 18.6165 18.4327 18.3877 18.3716 18.1408C18.3104 17.894 18.2111 17.5645 18.1509 17.4086C18.0907 17.2527 18.016 16.9975 17.9849 16.8416C17.9161 16.4962 17.5642 15.2108 17.2154 14.0306C16.9001 12.9638 16.6953 12.0685 16.7325 11.92C16.7553 11.8294 17.32 11.3578 17.7409 11.0779C18.3022 10.7045 18.8762 10.3163 19.3565 9.98538L19.9468 9.57859L20.2465 9.60265C20.4676 9.6204 20.641 9.67448 20.9081 9.80898C21.227 9.96955 21.2959 10.0289 21.4866 10.3074C21.6866 10.5994 21.7073 10.6577 21.7583 11.0723C21.7886 11.3192 21.8134 11.8573 21.8134 12.268C21.8134 13.1639 21.7396 13.5884 21.5406 13.8367C21.366 14.0545 20.9385 14.3139 20.7525 14.3148C20.4973 14.3161 20.475 14.3583 20.5588 14.6816C20.6512 15.0383 20.9395 15.8724 21.0686 16.1566C21.1218 16.2735 21.2122 16.5393 21.2696 16.7471C21.3269 16.955 21.4515 17.3761 21.5464 17.683C21.7394 18.307 21.7652 18.5816 21.6363 18.6418C21.4887 18.7107 18.6348 18.7177 18.5536 18.6493V18.6493ZM20.4438 13.2629C20.5297 13.2044 20.639 13.1034 20.6866 13.0385C20.8682 12.7908 20.9301 11.9131 20.7941 11.5141C20.6318 11.0377 20.0413 10.601 19.5221 10.5734C19.3018 10.5617 19.285 10.5687 19.2733 10.6776C19.2664 10.7418 19.3476 11.0389 19.4538 11.3377C19.56 11.6365 19.7506 12.1858 19.8773 12.5582C20.0957 13.2001 20.1741 13.3692 20.2532 13.3692C20.2721 13.3692 20.3579 13.3214 20.4438 13.2629V13.2629ZM10.4333 18.6279C10.3293 18.6068 10.3229 18.5887 10.3478 18.3848C10.3626 18.2636 10.4929 17.7971 10.6374 17.3481C10.7818 16.8991 10.9001 16.4911 10.9001 16.4415C10.9001 16.3918 10.919 16.3395 10.9421 16.3252C10.9652 16.3109 10.9984 16.2406 11.016 16.1689C11.0824 15.8976 11.2806 15.5511 11.4641 15.3853C11.6542 15.2136 12.4844 14.6448 12.5451 14.6448C12.5628 14.6447 12.6952 14.5521 12.8395 14.4388C12.9838 14.3256 13.1819 14.1949 13.2798 14.1484C13.3778 14.102 13.516 14.0059 13.5869 13.9349C13.6579 13.8639 13.7999 13.7627 13.9025 13.71C14.0051 13.6572 14.1515 13.5483 14.2278 13.468C14.3041 13.3877 14.3956 13.322 14.4311 13.322C14.4666 13.322 14.5738 13.2688 14.6694 13.2038C14.9978 12.9807 15.0884 13.0758 14.9898 13.5402C14.8354 14.2669 13.6376 18.5371 13.5687 18.6061C13.5332 18.6417 10.6022 18.662 10.4333 18.6279V18.6279ZM5.56534 17.1842C5.07546 15.7594 4.68174 14.691 4.62595 14.6353C4.60595 14.6152 4.21791 14.5675 3.76364 14.5291C2.97057 14.4621 2.63952 14.3916 2.4087 14.2403C2.27501 14.1527 2.26767 13.9834 2.39612 13.9498C2.44809 13.9362 2.49061 13.9078 2.49061 13.8866C2.49061 13.8654 2.53238 13.8347 2.58343 13.8185C2.63448 13.8023 2.82363 13.7038 3.00376 13.5995C3.32883 13.4113 3.33331 13.4102 3.60466 13.4604C3.97629 13.5291 4.23877 13.5256 4.23813 13.4519C4.23784 13.4194 4.20578 13.2879 4.16687 13.1596C4.12796 13.0313 4.10726 12.8913 4.12086 12.8485C4.15208 12.7501 5.55776 11.7559 5.98141 11.5325C6.04927 11.4967 6.15793 11.4194 6.22289 11.3606C6.28785 11.3019 6.38464 11.2407 6.43797 11.2247C6.63865 11.1643 6.69683 11.2846 6.94003 12.2621C7.06889 12.7801 7.19282 13.2783 7.21543 13.3692C7.23804 13.4601 7.28832 13.6515 7.32716 13.7944C7.42271 14.146 7.58574 14.7614 7.65469 15.0306C7.68574 15.1519 7.72368 15.2637 7.739 15.279C7.77539 15.3154 7.98907 14.6115 8.13232 13.9834C8.19454 13.7105 8.27681 13.4129 8.31515 13.322C8.3535 13.231 8.42178 12.9865 8.46689 12.7786C8.51199 12.5708 8.56591 12.3582 8.58671 12.3062C8.6075 12.2542 8.75492 11.6909 8.91432 11.0542C9.37003 9.23414 9.40428 9.15013 9.77613 8.93974C9.91358 8.86197 10.0792 8.74501 10.1441 8.67983C10.2091 8.61465 10.4014 8.48486 10.5715 8.39141C10.7417 8.29795 10.9745 8.14134 11.0889 8.04338C11.2033 7.94542 11.4575 7.75821 11.6536 7.62735C12.106 7.32561 12.7989 6.85789 12.8607 6.81256C13.068 6.6605 13.1921 6.60955 13.3239 6.62231C13.4633 6.63581 13.4739 6.64887 13.4625 6.79351C13.4556 6.87963 13.4105 7.02845 13.3621 7.12422C13.283 7.28065 13.1003 7.81926 12.8301 8.69204C12.7778 8.86094 12.6968 9.08416 12.65 9.1881C12.6031 9.29204 12.5081 9.58575 12.4388 9.8408C12.2249 10.6275 10.7968 14.7072 10.5014 15.3749C10.4101 15.5815 10.3418 15.6553 10.1011 15.8076C9.64613 16.0954 7.98987 17.2246 7.54572 17.5498C7.10076 17.8755 6.56204 18.2353 6.51928 18.2353C6.50409 18.2353 6.42197 18.2885 6.3368 18.3534C6.03979 18.58 6.0512 18.5973 5.56534 17.1842ZM11.5754 14.613C11.5586 14.5691 11.6517 14.2177 11.7851 13.8217C11.9171 13.4299 12.125 12.8117 12.2471 12.4479C12.3692 12.0842 12.5432 11.5846 12.6338 11.3377C12.9198 10.5586 13.5921 8.59764 13.7837 7.98338C13.9856 7.33645 14.1325 6.88233 14.2353 6.58762C14.3347 6.30293 14.4599 6.28259 16.1142 6.28259C17.7145 6.28259 17.7718 6.2925 17.8482 6.58227C17.8767 6.69028 18.0595 7.25611 18.2544 7.83968C18.6149 8.91899 18.8301 9.45613 18.9257 9.51518C18.9549 9.53323 18.9788 9.60034 18.9788 9.6643C18.9788 9.77971 18.8033 9.93358 18.3902 10.1802C18.3032 10.2322 18.0758 10.3807 17.8849 10.5103C17.694 10.6399 17.5041 10.7675 17.4627 10.7938C17.4214 10.8201 17.2352 10.9426 17.0489 11.0661C16.8626 11.1895 16.6596 11.2905 16.5978 11.2905C16.4823 11.2905 16.4821 11.2901 16.3981 10.8535C16.3818 10.769 16.3518 10.6787 16.3314 10.6527C16.311 10.6267 16.2801 10.5204 16.2626 10.4164C16.2083 10.093 16.0963 9.73141 16.0503 9.73141C15.9888 9.73141 15.6981 10.7545 15.6024 11.3081C15.585 11.4087 15.5511 11.5257 15.527 11.5679C15.5029 11.6102 15.4377 11.7723 15.3821 11.9283C15.2577 12.2767 15.0428 12.4938 14.4703 12.8495C14.2403 12.9924 13.9115 13.197 13.7398 13.3042C13.5681 13.4114 13.3286 13.5868 13.2075 13.694C13.0865 13.8012 12.968 13.8889 12.9442 13.8889C12.9204 13.8889 12.6368 14.0693 12.3139 14.2899C11.6992 14.7097 11.625 14.7422 11.5754 14.613V14.613ZM1.76355 13.6275C1.72374 13.5877 1.68128 13.4867 1.6692 13.4031C1.56837 12.7054 1.54514 12.407 1.54541 11.813C1.54591 10.7241 1.65937 10.3141 2.05701 9.9641C2.26143 9.78416 2.61988 9.63692 2.85351 9.63692C2.9369 9.63692 2.96305 9.61049 2.96305 9.52621C2.96305 9.39651 2.82419 8.98885 2.68372 8.70613C2.62948 8.59695 2.58509 8.47897 2.58509 8.44395C2.58509 8.40893 2.47755 8.04117 2.34611 7.62671C2.21467 7.21225 2.09488 6.76265 2.07991 6.62761C2.05339 6.38823 2.05613 6.38112 2.18898 6.34414C2.34236 6.30145 4.81383 6.30996 5.12447 6.35424C5.27317 6.37544 5.32525 6.40429 5.32525 6.46543C5.32525 6.51084 5.35647 6.58927 5.39462 6.6397C5.43277 6.69014 5.46466 6.78553 5.46548 6.85168C5.46631 6.91782 5.61605 7.5131 5.79823 8.17451C6.43554 10.4882 6.44058 10.511 6.35354 10.6936C6.30233 10.8009 6.20675 10.8875 6.06206 10.9576C5.94365 11.0149 5.74537 11.1504 5.62144 11.2588C5.49751 11.3672 5.30045 11.5041 5.18352 11.5632C5.06659 11.6222 4.7709 11.8199 4.52643 12.0025C3.97809 12.412 3.91636 12.4137 3.79979 12.0227C3.60868 11.3818 3.417 10.8268 3.35964 10.7483C3.21289 10.5476 2.77637 10.8137 2.65018 11.1808C2.55987 11.4434 2.5168 12.0721 2.57526 12.2743C2.60287 12.3698 2.66915 12.5907 2.72253 12.7652C2.77592 12.9397 2.80757 13.1138 2.79287 13.1521C2.75678 13.2462 2.50451 13.4168 2.12706 13.6024C1.88986 13.7191 1.85736 13.7213 1.76355 13.6275V13.6275ZM9.74462 8.2733C9.71692 8.186 9.96196 7.15772 10.1284 6.66286C10.2046 6.43636 10.2344 6.40039 10.376 6.3643C10.5662 6.31583 12.53 6.33747 12.581 6.3886C12.6002 6.40793 12.5754 6.46902 12.5257 6.52435C12.4028 6.66135 11.2538 7.47637 11.0127 7.59762C10.9057 7.6514 10.7569 7.74555 10.682 7.80685C10.607 7.86815 10.45 7.97326 10.3331 8.04043C10.2161 8.1076 10.0799 8.20728 10.0305 8.26195C9.91915 8.38495 9.78179 8.39041 9.74462 8.2733V8.2733Z"/>`,
    discord : `<path d="M20.4528 5.98993C17.7026 3.93193 15.0677 3.98977 15.0677 3.98977L14.7984 4.29745C18.0679 5.27833 19.5874 6.72073 19.5874 6.72073C14.9095 4.14529 8.95128 4.16377 4.08576 6.72073C4.08576 6.72073 5.6628 5.20129 9.1248 4.22041L8.93256 3.98953C8.93256 3.98953 6.3168 3.93193 3.54744 5.98969C3.54744 5.98969 0.77784 10.9709 0.77784 17.1062C0.77784 17.1062 2.39352 19.8758 6.64392 20.0105C6.64392 20.0105 7.35552 19.1642 7.93248 18.4334C5.49 17.7026 4.56672 16.1832 4.56672 16.1832C6.10128 17.1434 7.65288 17.7444 9.58656 18.1258C12.7325 18.7733 16.6457 18.1075 19.5684 16.1832C19.5684 16.1832 18.6067 17.741 16.0872 18.4526C16.6642 19.1642 17.3566 19.9913 17.3566 19.9913C21.607 19.8566 23.2224 17.087 23.2224 17.1065C23.2222 10.9711 20.4528 5.98993 20.4528 5.98993ZM8.4132 15.3178C7.33608 15.3178 6.45144 14.3753 6.45144 13.2022C6.53016 10.3925 10.3159 10.4011 10.375 13.2022C10.375 14.3753 9.50928 15.3178 8.4132 15.3178ZM15.433 15.3178C14.3558 15.3178 13.4712 14.3753 13.4712 13.2022C13.5576 10.398 17.2961 10.3968 17.3947 13.2022C17.3947 14.3753 16.5293 15.3178 15.433 15.3178Z"/>`,
}

export function getSocialIcon(name: string, properties: MaterialIconsProperties): UIComponent {
    
    properties.svg = SOCIAL_ICONS[name] || "";
    let text : string = createSVG(properties);
    const icon = new UIComponent({
        type: "div",
        classes: ["icon", "box-center"],
        text: text,
    });
    
    return icon;
}