export default function AddIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={props.width ?? 28}
            height={props.height ?? 28}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 28 28'
            {...props}
        >
            <g fillRule='evenodd' transform='translate(-446 -350)'>
                <g fillRule='nonzero'>
                    <path
                        d='M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z'
                        transform='translate(354.5 159.5)'
                    ></path>
                    <path
                        d='M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z'
                        transform='translate(354.5 159.5)'
                    ></path>
                </g>
            </g>
        </svg>
    );
}
