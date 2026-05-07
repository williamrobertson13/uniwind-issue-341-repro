import { Pressable, Text, View } from 'react-native';

import { copy591 } from '../generated/copy/copy591';
import { layout591 } from '../generated/layouts/layout591';
import { palette591 } from '../generated/palettes/palette591';

export function Screen591() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout591.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy591.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy591.detail} / {palette591.name}
			</Text>
		</View>
	);
}
