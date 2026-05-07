import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy400 } from '../generated/copy/copy400';
import { layout400 } from '../generated/layouts/layout400';
import { palette400 } from '../generated/palettes/palette400';

const RuntimeView400 = withUniwind(View);

export function Screen400() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView400 styleClassName={layout400.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy400.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy400.detail} / {palette400.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
