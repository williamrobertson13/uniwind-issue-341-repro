import { Pressable, Text, View } from 'react-native';

import { copy767 } from '../generated/copy/copy767';
import { layout767 } from '../generated/layouts/layout767';
import { palette767 } from '../generated/palettes/palette767';

export function Screen767() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout767.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy767.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy767.detail} / {palette767.name}
			</Text>
		</View>
	);
}
