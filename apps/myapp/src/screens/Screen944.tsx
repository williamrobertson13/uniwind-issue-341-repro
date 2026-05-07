import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy944 } from '../generated/copy/copy944';
import { layout944 } from '../generated/layouts/layout944';
import { palette944 } from '../generated/palettes/palette944';

const RuntimeView944 = withUniwind(View);

export function Screen944() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView944 styleClassName={layout944.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy944.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy944.detail} / {palette944.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
