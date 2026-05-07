import { Pressable, Text, View } from 'react-native';

import { copy940 } from '../generated/copy/copy940';
import { layout940 } from '../generated/layouts/layout940';
import { palette940 } from '../generated/palettes/palette940';

export function Screen940() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout940.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy940.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy940.detail} / {palette940.name}
			</Text>
		</View>
	);
}
