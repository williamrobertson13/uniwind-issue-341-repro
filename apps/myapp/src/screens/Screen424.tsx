import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy424 } from '../generated/copy/copy424';
import { layout424 } from '../generated/layouts/layout424';
import { palette424 } from '../generated/palettes/palette424';

const RuntimeView424 = withUniwind(View);

export function Screen424() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView424 styleClassName={layout424.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy424.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy424.detail} / {palette424.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
