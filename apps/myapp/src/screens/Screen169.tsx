import { Pressable, Text, View } from 'react-native';

import { copy169 } from '../generated/copy/copy169';
import { layout169 } from '../generated/layouts/layout169';
import { palette169 } from '../generated/palettes/palette169';

export function Screen169() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout169.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy169.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy169.detail} / {palette169.name}
			</Text>
		</View>
	);
}
