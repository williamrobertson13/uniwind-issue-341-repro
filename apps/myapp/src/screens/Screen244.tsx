import { Pressable, Text, View } from 'react-native';

import { copy244 } from '../generated/copy/copy244';
import { layout244 } from '../generated/layouts/layout244';
import { palette244 } from '../generated/palettes/palette244';

export function Screen244() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout244.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy244.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy244.detail} / {palette244.name}
			</Text>
		</View>
	);
}
