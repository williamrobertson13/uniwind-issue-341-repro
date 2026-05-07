import { Pressable, Text, View } from 'react-native';

import { copy780 } from '../generated/copy/copy780';
import { layout780 } from '../generated/layouts/layout780';
import { palette780 } from '../generated/palettes/palette780';

export function Screen780() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout780.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy780.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy780.detail} / {palette780.name}
			</Text>
		</View>
	);
}
