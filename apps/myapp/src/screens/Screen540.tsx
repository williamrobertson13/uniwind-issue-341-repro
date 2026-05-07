import { Pressable, Text, View } from 'react-native';

import { copy540 } from '../generated/copy/copy540';
import { layout540 } from '../generated/layouts/layout540';
import { palette540 } from '../generated/palettes/palette540';

export function Screen540() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout540.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy540.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy540.detail} / {palette540.name}
			</Text>
		</View>
	);
}
