import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy312 } from '../generated/copy/copy312';
import { layout312 } from '../generated/layouts/layout312';
import { palette312 } from '../generated/palettes/palette312';

const RuntimeView312 = withUniwind(View);

export function Screen312() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView312 styleClassName={layout312.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy312.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy312.detail} / {palette312.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
