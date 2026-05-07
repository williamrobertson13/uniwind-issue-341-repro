import { Pressable, Text, View } from 'react-native';

import { copy224 } from '../generated/copy/copy224';
import { layout224 } from '../generated/layouts/layout224';
import { palette224 } from '../generated/palettes/palette224';

export function Screen224() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout224.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy224.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy224.detail} / {palette224.name}
			</Text>
		</View>
	);
}
