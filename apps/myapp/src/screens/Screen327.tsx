import { Pressable, Text, View } from 'react-native';

import { copy327 } from '../generated/copy/copy327';
import { layout327 } from '../generated/layouts/layout327';
import { palette327 } from '../generated/palettes/palette327';

export function Screen327() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout327.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy327.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy327.detail} / {palette327.name}
			</Text>
		</View>
	);
}
