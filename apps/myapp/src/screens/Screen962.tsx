import { Pressable, Text, View } from 'react-native';

import { copy962 } from '../generated/copy/copy962';
import { layout962 } from '../generated/layouts/layout962';
import { palette962 } from '../generated/palettes/palette962';

export function Screen962() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout962.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy962.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy962.detail} / {palette962.name}
			</Text>
		</View>
	);
}
