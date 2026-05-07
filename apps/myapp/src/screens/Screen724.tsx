import { Pressable, Text, View } from 'react-native';

import { copy724 } from '../generated/copy/copy724';
import { layout724 } from '../generated/layouts/layout724';
import { palette724 } from '../generated/palettes/palette724';

export function Screen724() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout724.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy724.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy724.detail} / {palette724.name}
			</Text>
		</View>
	);
}
