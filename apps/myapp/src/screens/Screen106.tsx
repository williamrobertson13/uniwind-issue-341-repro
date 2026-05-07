import { Pressable, Text, View } from 'react-native';

import { copy106 } from '../generated/copy/copy106';
import { layout106 } from '../generated/layouts/layout106';
import { palette106 } from '../generated/palettes/palette106';

export function Screen106() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout106.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy106.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy106.detail} / {palette106.name}
			</Text>
		</View>
	);
}
