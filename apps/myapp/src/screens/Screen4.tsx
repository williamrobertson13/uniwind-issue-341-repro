import { Pressable, Text, View } from 'react-native';

import { copy4 } from '../generated/copy/copy4';
import { layout4 } from '../generated/layouts/layout4';
import { palette4 } from '../generated/palettes/palette4';

export function Screen4() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout4.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy4.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy4.detail} / {palette4.name}
			</Text>
		</View>
	);
}
