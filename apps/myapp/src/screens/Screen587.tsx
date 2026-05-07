import { Pressable, Text, View } from 'react-native';

import { copy587 } from '../generated/copy/copy587';
import { layout587 } from '../generated/layouts/layout587';
import { palette587 } from '../generated/palettes/palette587';

export function Screen587() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout587.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy587.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy587.detail} / {palette587.name}
			</Text>
		</View>
	);
}
