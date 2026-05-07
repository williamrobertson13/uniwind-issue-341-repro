import { Pressable, Text, View } from 'react-native';

import { copy12 } from '../generated/copy/copy12';
import { layout12 } from '../generated/layouts/layout12';
import { palette12 } from '../generated/palettes/palette12';

export function Screen12() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout12.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy12.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy12.detail} / {palette12.name}
			</Text>
		</View>
	);
}
