import { Pressable, Text, View } from 'react-native';

import { copy472 } from '../generated/copy/copy472';
import { layout472 } from '../generated/layouts/layout472';
import { palette472 } from '../generated/palettes/palette472';

export function Screen472() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout472.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy472.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy472.detail} / {palette472.name}
			</Text>
		</View>
	);
}
