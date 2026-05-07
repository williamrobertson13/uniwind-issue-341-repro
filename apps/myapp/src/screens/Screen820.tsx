import { Pressable, Text, View } from 'react-native';

import { copy820 } from '../generated/copy/copy820';
import { layout820 } from '../generated/layouts/layout820';
import { palette820 } from '../generated/palettes/palette820';

export function Screen820() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout820.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy820.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy820.detail} / {palette820.name}
			</Text>
		</View>
	);
}
