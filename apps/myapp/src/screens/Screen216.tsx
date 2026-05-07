import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy216 } from '../generated/copy/copy216';
import { layout216 } from '../generated/layouts/layout216';
import { palette216 } from '../generated/palettes/palette216';

const RuntimeView216 = withUniwind(View);

export function Screen216() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView216 styleClassName={layout216.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy216.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy216.detail} / {palette216.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
