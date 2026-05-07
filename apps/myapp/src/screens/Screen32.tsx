import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy32 } from '../generated/copy/copy32';
import { layout32 } from '../generated/layouts/layout32';
import { palette32 } from '../generated/palettes/palette32';

const RuntimeView32 = withUniwind(View);

export function Screen32() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView32 styleClassName={layout32.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy32.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy32.detail} / {palette32.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
