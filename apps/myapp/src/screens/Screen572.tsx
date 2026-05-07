import { Pressable, Text, View } from 'react-native';

import { copy572 } from '../generated/copy/copy572';
import { layout572 } from '../generated/layouts/layout572';
import { palette572 } from '../generated/palettes/palette572';

export function Screen572() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout572.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy572.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy572.detail} / {palette572.name}
			</Text>
		</View>
	);
}
