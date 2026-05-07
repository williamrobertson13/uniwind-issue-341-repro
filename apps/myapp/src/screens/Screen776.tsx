import { Pressable, Text, View } from 'react-native';

import { copy776 } from '../generated/copy/copy776';
import { layout776 } from '../generated/layouts/layout776';
import { palette776 } from '../generated/palettes/palette776';

export function Screen776() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout776.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy776.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy776.detail} / {palette776.name}
			</Text>
		</View>
	);
}
