import { Pressable, Text, View } from 'react-native';

import { copy423 } from '../generated/copy/copy423';
import { layout423 } from '../generated/layouts/layout423';
import { palette423 } from '../generated/palettes/palette423';

export function Screen423() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout423.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy423.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy423.detail} / {palette423.name}
			</Text>
		</View>
	);
}
