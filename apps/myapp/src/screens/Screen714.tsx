import { Pressable, Text, View } from 'react-native';

import { copy714 } from '../generated/copy/copy714';
import { layout714 } from '../generated/layouts/layout714';
import { palette714 } from '../generated/palettes/palette714';

export function Screen714() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout714.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy714.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy714.detail} / {palette714.name}
			</Text>
		</View>
	);
}
