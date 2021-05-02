import * as React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

function Scroll() {
  return (
    <Wrapper>
      <StyledSvg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        width="73"
        height="81"
        viewBox="0 0 73 81"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M36.9468 79.7575C47.5733 79.7338 56.1775 72.1556 56.1775 62.8078V40.7733C56.1775 40.7124 56.1775 40.6497 56.1756 40.5887C56.0638 31.3255 47.5039 23.8457 36.9468 23.8236"
          stroke="#5A5A5A"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M36.9468 79.7575H36.8986C26.2509 79.7575 17.6197 72.1691 17.6197 62.8078V40.7733C17.6197 40.7124 17.6197 40.6497 17.6216 40.5887C17.7334 31.3122 26.3203 23.8236 36.8986 23.8236H36.9468"
          stroke="#5A5A5A"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M36.9468 79.7575H36.8986C27.701 79.7575 20.0081 74.0953 18.0833 66.5193"
          stroke="#5A5A5A"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M36.9468 79.7575C46.0092 79.7373 53.6009 74.2228 55.6392 66.8019"
          stroke="#5A5A5A"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <g opacity="0.998808">
          <AnimatedPath
            initial={{ y: -25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
            d="M36.8986 59.2353C36.2248 59.2353 35.6785 58.7551 35.6785 58.1627V56.0174C35.6785 55.4249 36.2248 54.9448 36.8986 54.9448C37.5725 54.9448 38.1186 55.4249 38.1186 56.0174V58.1627C38.1186 58.7551 37.5725 59.2353 36.8986 59.2353Z"
            stroke="#5A5A5A"
            strokeWidth="1.69"
            strokeMiterlimit="10"
          />
        </g>
        <path
          d="M7.39457 28.2097C7.71835 27.959 8.11968 27.8765 8.57401 27.9681C9.03942 28.0619 9.36707 28.3022 9.55698 28.6891C9.76034 29.0678 9.784 29.5737 9.64379 30.1881C9.4917 30.8547 9.20429 31.3523 8.78155 31.681C8.35881 32.0098 7.85933 32.1161 7.29419 32.0022L7.02566 33.179C7.56864 33.2885 8.10056 33.2432 8.59689 33.0491C9.0956 32.8446 9.53179 32.5077 9.89677 32.0257C10.2594 31.5541 10.5231 31.0081 10.6633 30.3936C10.8771 29.4563 10.8155 28.6595 10.4784 28.0033C10.1524 27.3494 9.59606 26.9431 8.83146 26.789C8.35497 26.693 7.91012 26.7123 7.51037 26.8387C7.10824 26.9755 6.72905 27.215 6.36805 27.578C6.00705 27.9409 5.63018 28.475 5.23984 29.1698C4.84949 29.8645 4.48688 30.3361 4.15202 30.5846C3.81478 30.8434 3.45778 30.9348 3.06994 30.8567C2.58237 30.7584 2.24363 30.5158 2.05135 30.1394C1.84798 29.7607 1.8172 29.2861 1.95027 28.7028C2.09286 28.078 2.36839 27.6324 2.77924 27.3557C3.17902 27.0768 3.67137 27.0018 4.24759 27.1179L4.51612 25.941C3.98423 25.8338 3.47684 25.8732 2.97418 26.0442C2.47153 26.2152 2.04484 26.5105 1.68066 26.9382C1.31647 27.3659 1.06863 27.8933 0.930804 28.4974C0.726435 29.393 0.803874 30.1712 1.16312 30.8318C1.52475 31.4821 2.08113 31.8883 2.82357 32.038C3.47736 32.1698 4.0837 32.0523 4.63151 31.6834C5.1904 31.3167 5.7335 30.6637 6.27191 29.7264C6.69868 28.9736 7.07949 28.473 7.39457 28.2097Z"
          fill="#5A5A5A"
        />
        <path
          d="M11.6249 23.307C11.0718 23.3736 10.4282 23.2057 9.71359 22.8138L9.51781 22.7065C8.78366 22.3039 8.30158 21.8545 8.09687 21.36C7.87666 20.8693 7.92647 20.3663 8.2406 19.8604C8.47477 19.4832 8.806 19.2455 9.22042 19.1275C9.63485 19.0094 10.0591 19.0447 10.4775 19.2372L11.0601 18.2988C10.3773 17.9614 9.69615 17.8962 9.0068 18.0978C8.32723 18.3047 7.77491 18.7294 7.3694 19.3826C7.03814 19.9162 6.88961 20.4514 6.89853 20.9865C6.92295 21.5178 7.10237 22.0108 7.44087 22.4801C7.77937 22.9494 8.25492 23.3458 8.86183 23.6786L9.03803 23.7752C10.0169 24.312 10.933 24.506 11.7822 24.3428C12.6413 24.185 13.3192 23.7058 13.8104 22.9146C14.056 22.519 14.1923 22.0882 14.2135 21.6312C14.2503 21.1704 14.1728 20.7457 13.9812 20.3569C13.7895 19.9682 13.5252 19.6753 13.1745 19.4583L12.5919 20.3967C12.9174 20.6121 13.1197 20.9204 13.1792 21.3106C13.2485 21.7063 13.162 22.0781 12.9392 22.4369C12.6194 22.9521 12.1878 23.2457 11.6249 23.307Z"
          fill="#5A5A5A"
        />
        <path
          d="M13.9024 11.8337C13.7749 11.8663 13.6248 11.9671 13.4521 12.1362C12.942 12.6356 12.7867 13.2338 12.9621 13.9234L12.3495 13.4004L11.5255 14.2072L16.7092 18.8835L17.5568 18.0536L13.8775 14.7345C13.5828 14.0848 13.7142 13.4946 14.2714 12.949C14.4205 12.803 14.5781 12.6795 14.72 12.5713L13.9024 11.8337Z"
          fill="#5A5A5A"
        />
        <path
          d="M18.5536 12.5226C19.1331 13.4131 19.8612 13.9809 20.7285 14.2315C21.6053 14.4766 22.4498 14.3658 23.2813 13.8878C23.8324 13.5711 24.2427 13.1604 24.5084 12.6705C24.7683 12.1716 24.8626 11.6429 24.8049 11.0643C24.7472 10.4857 24.5283 9.92477 24.1617 9.3614L24.1144 9.28871C23.529 8.38913 22.8105 7.81579 21.9336 7.57069C21.0664 7.32004 20.2122 7.43647 19.3808 7.91441C18.8393 8.22562 18.4387 8.63071 18.1826 9.11502C17.9169 9.60488 17.8129 10.1391 17.8765 10.7268C17.9342 11.3055 18.1397 11.8866 18.5063 12.4499L18.5536 12.5226ZM19.0383 10.0216C19.0993 9.46209 19.3849 9.02322 19.907 8.72311C20.4388 8.41745 20.9943 8.37283 21.5676 8.58016C22.1409 8.78749 22.6326 9.2165 23.0407 9.84348C23.5019 10.5522 23.702 11.1863 23.6372 11.7605C23.588 12.3381 23.2868 12.7735 22.755 13.0791C22.2233 13.3848 21.6834 13.4329 21.11 13.2256C20.5523 13.0218 20.0509 12.5983 19.637 11.9623C19.1698 11.2444 18.9735 10.5957 19.0383 10.0216Z"
          fill="#5A5A5A"
        />
        <path d="M26.5894 1.93429L25.4121 2.28574L28.4996 11.4222L29.677 11.0708L26.5894 1.93429Z" fill="#5A5A5A" />
        <path d="M32.2314 0.757509L31.0114 0.939453L32.6098 10.4072L33.8299 10.2253L32.2314 0.757509Z" fill="#5A5A5A" />
        <path
          d="M43.8707 10.6404C44.7182 10.8364 45.4987 10.8508 46.218 10.6633C46.9454 10.4887 47.5619 10.122 48.0729 9.58652C48.5868 9.04068 48.9618 8.36189 49.1926 7.52684L49.3465 6.97015C49.5716 6.15573 49.5927 5.40154 49.4265 4.68966C49.2574 3.98809 48.9087 3.38572 48.3775 2.89286C47.8463 2.4 47.168 2.0583 46.3563 1.86011L43.7127 1.21468L41.282 10.0084L43.8707 10.6404ZM46.127 2.81659C47.0346 3.04919 47.6706 3.50161 48.0104 4.17883C48.3639 4.84841 48.3996 5.6935 48.1232 6.69349L47.9807 7.20895C47.6986 8.22956 47.216 8.95909 46.5246 9.38455C45.8442 9.8127 45.0323 9.91161 44.078 9.67861L42.7837 9.36258L44.6901 2.46575L46.127 2.81659Z"
          fill="#5A5A5A"
        />
        <path
          d="M52.2257 9.82332C51.6075 10.6905 51.3634 11.5497 51.4839 12.3948C51.6139 13.2459 52.0743 13.9204 52.884 14.4303C53.4207 14.7682 53.9892 14.9467 54.5738 14.9686C55.1647 14.9817 55.7151 14.841 56.2502 14.5497C56.7852 14.2584 57.2357 13.8369 57.6268 13.2883L57.6773 13.2175C58.3018 12.3415 58.5553 11.4882 58.4254 10.6372C58.3048 9.79202 57.835 9.11156 57.0253 8.60171C56.498 8.26971 55.9389 8.09717 55.3637 8.08117C54.7792 8.05924 54.2193 8.19393 53.678 8.4941C53.1429 8.78542 52.6673 9.20389 52.2762 9.75253L52.2257 9.82332ZM54.8456 9.19083C55.4118 9.00888 55.9554 9.06913 56.4639 9.38927C56.9817 9.71533 57.2572 10.1709 57.2967 10.747C57.3361 11.3232 57.1272 11.9224 56.692 12.533C56.2 13.2232 55.6708 13.6593 55.0889 13.8442C54.51 14.0438 53.9633 13.9688 53.4455 13.6427C52.9276 13.3166 52.6552 12.8759 52.6157 12.2997C52.5794 11.7384 52.7789 11.1332 53.2204 10.5138C53.7188 9.8147 54.2636 9.37569 54.8456 9.19083Z"
          fill="#5A5A5A"
        />
        <path
          d="M66.1817 17.1296L65.593 16.3731L60.2644 18.0962L63.7731 14.0347L63.0505 13.1062L58.4821 18.6748L59.0709 19.4313L64.4653 17.7025L61.1049 22.0448L61.6937 22.8014L68.7309 20.4051L68.0016 19.468L62.7489 21.469L66.1817 17.1296Z"
          fill="#5A5A5A"
        />
        <path
          d="M70.508 24.6195L63.5938 26.4568L63.9268 27.5637L68.8562 26.2538C69.2296 26.3207 69.567 26.4634 69.8574 26.6851C70.1339 26.8994 70.3386 27.1882 70.4465 27.5469C70.5791 27.9877 70.5578 28.3475 70.3826 28.6265C70.2043 28.8953 69.8675 29.1065 69.3767 29.237L64.7964 30.4541L65.1325 31.5713L69.7019 30.3571C71.3425 29.899 71.9647 28.992 71.5515 27.6186C71.311 26.8191 70.7787 26.2632 69.9624 25.9378L70.8256 25.6752L70.508 24.6195Z"
          fill="#5A5A5A"
        />
      </StyledSvg>
    </Wrapper>
  );
}

const StyledSvg = styled(motion.svg)`
  cursor: pointer;
  path {
    stroke: ${(props) => props.theme.headingText};
  }
`;
const Wrapper = styled.div`
  padding-top: 15rem;
  padding-bottom: 15rem;
  display: grid;
  place-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
const AnimatedPath = styled(motion.path)``;

export default Scroll;
