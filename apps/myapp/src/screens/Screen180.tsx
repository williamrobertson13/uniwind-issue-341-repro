import { Pressable, Text, View } from 'react-native';

import { copy180 } from '../generated/copy/copy180';
import { layout180 } from '../generated/layouts/layout180';
import { palette180 } from '../generated/palettes/palette180';

export function Screen180() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout180.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy180.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy180.detail} / {palette180.name}
			</Text>
		</View>
	);
}
