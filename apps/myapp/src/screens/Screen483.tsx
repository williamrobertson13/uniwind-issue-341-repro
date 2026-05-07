import { Pressable, Text, View } from 'react-native';

import { copy483 } from '../generated/copy/copy483';
import { layout483 } from '../generated/layouts/layout483';
import { palette483 } from '../generated/palettes/palette483';

export function Screen483() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout483.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy483.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy483.detail} / {palette483.name}
			</Text>
		</View>
	);
}
