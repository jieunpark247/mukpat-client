import '@/styles/globals.css';
import localFont from 'next/font/local';
import Provider from '@/providers/react-query';

const pretendardFont = localFont({
	src: '../../public/PretendardVariable.woff2',
	display: 'swap',
});

export const metadata = {
	title: '먹팟',
	description: '점심 랜덤 모임',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={pretendardFont.className}>
			<body>
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
