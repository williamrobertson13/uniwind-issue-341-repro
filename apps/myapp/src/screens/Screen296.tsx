import { Pressable, Text, View } from 'react-native';

import { copy296 } from '../generated/copy/copy296';
import { layout296 } from '../generated/layouts/layout296';
import { palette296 } from '../generated/palettes/palette296';

export function Screen296() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout296.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy296.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy296.detail} / {palette296.name}
			</Text>
		</View>
	);
}
