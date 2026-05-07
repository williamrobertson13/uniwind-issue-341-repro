import { Pressable, Text, View } from 'react-native';

import { copy66 } from '../generated/copy/copy66';
import { layout66 } from '../generated/layouts/layout66';
import { palette66 } from '../generated/palettes/palette66';

export function Screen66() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout66.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy66.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy66.detail} / {palette66.name}
			</Text>
		</View>
	);
}
