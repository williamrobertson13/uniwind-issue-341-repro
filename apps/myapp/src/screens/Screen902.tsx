import { Pressable, Text, View } from 'react-native';

import { copy902 } from '../generated/copy/copy902';
import { layout902 } from '../generated/layouts/layout902';
import { palette902 } from '../generated/palettes/palette902';

export function Screen902() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout902.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy902.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy902.detail} / {palette902.name}
			</Text>
		</View>
	);
}
