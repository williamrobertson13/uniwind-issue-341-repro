import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy976 } from '../generated/copy/copy976';
import { layout976 } from '../generated/layouts/layout976';
import { palette976 } from '../generated/palettes/palette976';

const RuntimeView976 = withUniwind(View);

export function Screen976() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView976 styleClassName={layout976.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy976.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy976.detail} / {palette976.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
