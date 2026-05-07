import { Pressable, Text, View } from 'react-native';

import { copy366 } from '../generated/copy/copy366';
import { layout366 } from '../generated/layouts/layout366';
import { palette366 } from '../generated/palettes/palette366';

export function Screen366() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout366.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy366.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy366.detail} / {palette366.name}
			</Text>
		</View>
	);
}
