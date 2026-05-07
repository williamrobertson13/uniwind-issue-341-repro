import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy640 } from '../generated/copy/copy640';
import { layout640 } from '../generated/layouts/layout640';
import { palette640 } from '../generated/palettes/palette640';

const RuntimeView640 = withUniwind(View);

export function Screen640() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView640 styleClassName={layout640.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy640.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy640.detail} / {palette640.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
