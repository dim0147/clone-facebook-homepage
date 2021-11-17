export default function NewRoomIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={props.width ?? 28}
            height={props.height ?? 28}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 28 28'
            {...props}
        >
            <g fillRule='evenodd' transform='translate(-448 -544)'>
                <path d='M457.25 552.5H455v2.25a.75.75 0 0 1-1.5 0v-2.25h-2.25a.75.75 0 0 1 0-1.5h2.25v-2.25a.75.75 0 0 1 1.5 0V551h2.25a.75.75 0 0 1 0 1.5m6.38-4.435a.62.62 0 0 0-.64.047l-2.49 1.634v-1.394a1.854 1.854 0 0 0-1.852-1.852l-8.796.002a1.854 1.854 0 0 0-1.851 1.852v6.793c0 1.021.83 1.852 1.852 1.852l1.147-.002h7.648a1.854 1.854 0 0 0 1.852-1.851v-1.392l2.457 1.61a.641.641 0 0 0 .673.071.663.663 0 0 0 .37-.601v-6.167c0-.26-.142-.49-.37-.602'></path>
            </g>
        </svg>
    );
}
