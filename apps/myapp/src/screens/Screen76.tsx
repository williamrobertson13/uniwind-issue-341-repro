import { Pressable, Text, View } from 'react-native';

import { copy76 } from '../generated/copy/copy76';
import { layout76 } from '../generated/layouts/layout76';
import { palette76 } from '../generated/palettes/palette76';

export function Screen76() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout76.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy76.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy76.detail} / {palette76.name}
			</Text>
		</View>
	);
}
