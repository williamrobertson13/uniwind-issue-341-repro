import { Pressable, Text, View } from 'react-native';

import { copy648 } from '../generated/copy/copy648';
import { layout648 } from '../generated/layouts/layout648';
import { palette648 } from '../generated/palettes/palette648';

export function Screen648() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout648.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy648.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy648.detail} / {palette648.name}
			</Text>
		</View>
	);
}
