import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy808 } from '../generated/copy/copy808';
import { layout808 } from '../generated/layouts/layout808';
import { palette808 } from '../generated/palettes/palette808';

const RuntimeView808 = withUniwind(View);

export function Screen808() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView808 styleClassName={layout808.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy808.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy808.detail} / {palette808.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
