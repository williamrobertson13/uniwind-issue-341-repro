import { Pressable, Text, View } from 'react-native';

import { copy692 } from '../generated/copy/copy692';
import { layout692 } from '../generated/layouts/layout692';
import { palette692 } from '../generated/palettes/palette692';

export function Screen692() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout692.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy692.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy692.detail} / {palette692.name}
			</Text>
		</View>
	);
}
