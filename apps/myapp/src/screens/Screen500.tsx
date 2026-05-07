import { Pressable, Text, View } from 'react-native';

import { copy500 } from '../generated/copy/copy500';
import { layout500 } from '../generated/layouts/layout500';
import { palette500 } from '../generated/palettes/palette500';

export function Screen500() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout500.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy500.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy500.detail} / {palette500.name}
			</Text>
		</View>
	);
}
