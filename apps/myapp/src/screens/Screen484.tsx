import { Pressable, Text, View } from 'react-native';

import { copy484 } from '../generated/copy/copy484';
import { layout484 } from '../generated/layouts/layout484';
import { palette484 } from '../generated/palettes/palette484';

export function Screen484() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout484.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy484.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy484.detail} / {palette484.name}
			</Text>
		</View>
	);
}
